import React from "react";
import Layout from "@/components/Layout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { getTrack } from "@/database/musicLibrary";
import { serializeErrorFunc } from "@/utils/utilityFuncs";
import { toast } from "react-toastify";


// form validation - YUP
const schema = yup
  .object({
    title: yup.string().required("Please enter the track title!"),
    artist: yup.string().required("Please enter the artist's name!"),
    album: yup.string(),
    year: yup
      .number()
      .typeError("Please enter a year!")
      .test(
        "number-length",
        "Year must be exactly 4 digits",
        (value) => value && value.toString().length === 4
      ),
  })
  .required();

const TrackUpdate = ({ trackData }) => {

  const { artist, title, album, year, genre, id } = trackData;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUpdate = async (data) => {
  
    // add track id to form data object
    let updatedData = {id, ...data};
    
    const response = await axios.put("/api/updateTrack", updatedData);
    const { title } = response.data;
    const answer = `Congratulations, you updated the track ${title.toUpperCase()}`;

    const notify = (msg) => {
      toast.success(msg, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    };

    
    notify(answer);
  };

  return (
    <Layout>
      <main className=" flex flex-col items-center justify-evenly  col-start-2 col-end-13 row-start-2 row-end-7 bg-gradient-to-r from-main-bg ...">
        <h2 className="text-3xl">Update track details:</h2>
        <form
          className=" w-96 flex flex-col gap-2"
          onSubmit={handleSubmit(handleUpdate)}
        >
          <div className="flex justify-between">
            <label htmlFor="form-title">Title</label>
            <span className="text-red-600">
              {errors.title && errors.title.message}
            </span>
          </div>
          <input
            type="text"
            className="form-input bg-inherit border-0 border-b-2 text-primary-textColour px-5 focus:ring-0 "
            defaultValue={title}
            {...register("title")}
          />
          <div className="flex justify-between">
            <label htmlFor="form-artist">Artist</label>
            <span className="text-red-600">
              {errors.artist && errors.artist.message}
            </span>
          </div>
          <input
            type="text"
            className="form-input bg-inherit border-0 border-b-2  text-primary-textColour px-5 focus:ring-0"
            defaultValue={artist}
            {...register("artist")}
          />
          <div className="flex justify-between">
            <label htmlFor="form-album">Album</label>
            <span className="text-red-600">
              {errors.album && errors.album.message}
            </span>
          </div>
          <input
            type="text"
            className="form-input bg-inherit border-0 border-b-2  text-primary-textColour px-5 focus:ring-0"
            defaultValue={album}
            {...register("album")}
          />
          <div className="flex justify-between">
            <label htmlFor="form-year">Year</label>
            <span className="text-red-600">
              {errors.year && errors.year.message}
            </span>
          </div>
          <input
            type="text"
            className="form-input bg-inherit border-0 border-b-2 focus:ring-0"
            defaultValue={year}
            {...register("year")}
          />
          <label htmlFor="form-genre">Genre:</label>
          <select
            defaultValue={genre}
            className="form-multiselect bg-inherit text-primary-textColour px-5 rounded-full"
            {...register("genre")}
          >
            <option className=" bg-main-bg" value="UKG">
              UKG
            </option>
            <option className=" bg-main-bg" value="House">
              House
            </option>
            <option className=" bg-main-bg" value="Garage">
              Garage
            </option>
            <option className=" bg-main-bg" value="HipHop">
              Hip-Hop
            </option>
            <option className=" bg-main-bg" value="R&B">
              R&B
            </option>
            <option className=" bg-main-bg" value="Pop">
              Pop
            </option>
            <option className=" bg-main-bg" value="Indie">
              Indie
            </option>
          </select>
          <button
            className="rounded-full bg-teal-500 py-2 px-5 w-fit mt-4 self-center hover:bg-teal-400"
            type="submit"
          >
            Update
          </button>
        </form>
      </main>
    </Layout>
  );
};

export default TrackUpdate;


// Prefill form with existing data via defaultValue prop
export async function getServerSideProps(context) {

  let trackId = context.params.id;

  const getTrackData = await getTrack(trackId);
  const trackData = await serializeErrorFunc(getTrackData);

  return {
    props: { trackData },
  };
}
