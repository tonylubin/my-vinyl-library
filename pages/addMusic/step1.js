import Layout from "@/components/Layout";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { UserContext } from "../_app";
import { useRouter } from "next/router";


// form validation - YUP
const schema = yup
  .object({
    title: yup.string().required('Please enter the track title!'),
    artist: yup.string().required("Please enter the artist's name!"),
    album: yup.string(),
    year: yup.number().typeError('Please enter a year!').test('number-length', 'Year must be exactly 4 digits', value => value && value.toString().length === 4 )
  })
  .required();

const Step1 = () => {

  const { setFormData } = useContext(UserContext);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await setFormData(data);
    router.push('/addMusic/result');
    // form reset
    // reset();
    
    // const response = await axios.post('/api/addTrack', data);
    // const { title, artist } = response.data;
    // const answer = `Congratulations, you added ${title} by ${artist}`;
  
    // const notify = (msg) => {
    //   toast.success(msg, {
    //     position: "bottom-right",
    //     autoClose: 5000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     });
    // }

    // notify(answer);
    
  };

  return (
    <Layout>
      <main className=" flex flex-col items-center justify-evenly  col-start-2 col-end-13 row-start-2 row-end-7 bg-gradient-to-r from-main-bg ...">  
        <h2 className="text-3xl">Enter track details:</h2>
        <form
          className=" w-96 flex flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-between">
            <label htmlFor="form-title">Title</label>
            <span className="text-red-600">
              {errors.title && errors.title.message}
            </span>
          </div>
          <input
            id="form-title"
            type="text"
            className="form-input bg-inherit border-0 border-b-2 text-primary-textColour px-5 focus:ring-0 "
            placeholder="Enter title..."
            {...register("title")}
          />
          <div className="flex justify-between">
            <label htmlFor="form-artist">Artist</label>
            <span className="text-red-600">
              {errors.artist && errors.artist.message}
            </span>
          </div>
          <input
            id="form-artist"
            type="text"
            className="form-input bg-inherit border-0 border-b-2  text-primary-textColour px-5 focus:ring-0"
            placeholder="Enter artist..."
            {...register("artist")}
          />
          <div className="flex justify-between">
            <label htmlFor="form-album">Album</label>
            <span className="text-red-600">
              {errors.album && errors.album.message}
            </span>
          </div>
          <input
            id="form-album"
            type="text"
            className="form-input bg-inherit border-0 border-b-2  text-primary-textColour px-5 focus:ring-0"
            defaultValue={"N/A"}
            {...register("album")}
          />
          <div className="flex justify-between">
            <label htmlFor="form-year">Year</label>
            <span className="text-red-600">
              {errors.year && errors.year.message}
            </span>
          </div>
          <input
            id="form-year"
            type="text"
            className="form-input bg-inherit border-0 border-b-2 focus:ring-0"
            placeholder="Year must be in a XXXX format...e.g.1998"
            {...register("year")}
          />
          <label htmlFor="form-genre">Genre:</label>
          <select
            id="form-genre"
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
            className="rounded-full bg-blue-700 py-2 px-5 w-fit mt-4 self-center hover:bg-blue-900 "
            type="submit"
          >
            Next
          </button>
        </form>
      </main>
    </Layout>
  );
};

export default Step1;
