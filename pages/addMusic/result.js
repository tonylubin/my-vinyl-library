import React, { useContext } from 'react';
import { UserContext } from '../_app';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';


const Result = () => {

  const { formData, setFormData } = useContext(UserContext);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // form reset
    reset();
    
  };

  return (
    <Layout>
      <main className=" flex flex-col items-center justify-evenly  col-start-2 col-end-13 row-start-2 row-end-7 bg-gradient-to-r from-main-bg ...">  
        <h2 className="text-3xl">Upload Picture and Music sample:</h2>
        <form
          className=" w-96 flex flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-between">
            <label htmlFor="form-picture">Select picture:</label>
            <span className="text-red-600">
              {errors.picture && errors.picture.message}
            </span>
          </div>
          <input
            id='form-picture'
            type='file'
            accept='image/*'
          >
          </input>
          <button
            className="rounded-full bg-blue-700 py-2 px-5 w-fit mt-4 self-center hover:bg-blue-900 "
            type="submit"
          >
            Submit
          </button>
        </form>
      </main>
    </Layout>
  );
};

export default Result;