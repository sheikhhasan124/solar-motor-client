import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query'
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddProduct = () => {
  const {register,formState: { errors }, handleSubmit, reset} = useForm();



const imageStorage_Key = '7b9935e9f253a9586f1b45588dd38ebf'

/**
 * 3 ways to store images
 * 1- third party storage // free open public storage is ok for practice
 * 2- your own storage in your own server(file system)
 * 3- databaser = mongodb
 * 
 * YUP: to validate file : seach yup file validation for react hook form 
*/
  const onSubmit = async(data) => {
   const image = data.image[0]
   // akane img ta imgdd server store kora hoase tar por sei img ar link and baki info  gula express server ar maddome mongo db te save korbo
   const url = `https://api.imgbb.com/1/upload?key=${imageStorage_Key}`
   const formData = new FormData();
   formData.append('image', image)
   fetch(url,{
     method:'POST',
     body:formData
   })
   .then(res=>res.json())
   .then(result=>{
     if(result.success){
       const img = result.data.url;
       const product = {
         name :data.name,
         available :data.available,
         desc :data.desc,
         price :data.price,
         minorder :data.minorder,
         img :img
       }
       // send to your data base the doctor info
       fetch('https://enigmatic-dawn-68660.herokuapp.com/product',{
         method:'POST',
         headers:{
           'content-type': 'application/json',
        //    authorization : `Bearer ${localStorage.getItem('accessToken')}`
         },
         body: JSON.stringify(product)
       })
       .then(res=>res.json())
       .then(inserted=>{
         if(inserted.insertedId){
            toast.success('doctor added succeessfully')
            reset()
         }
         else{
           toast.error('failed to add the doctor')
         }

        //  console.log('doctor', inserted)
       })
     }
    //  console.log('result',result)
   })
    //  console.log(data)
   };



  return (
    <div className="flex justify-center">
        <div>
      <h2 className="text-2xl font-semibold text-center py-4">Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
         
          <input
            type="name"
            placeholder="name"
            {...register("name", {
              required: {
                value: true,
                message: "name is required",
              },
              minLength: {
                value: 1,
                message: "provide a name",
              },
            })}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
            {errors.name?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
         
          <input
            type="available"
            placeholder="available"
            {...register("available", {
              required: {
                value: true,
                message: "available is required",
              },
             
            })}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
           
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
        
          <input
            type="desc"
            placeholder="desc"
            {...register("desc", {
              required: {
                value: true,
                message: "desc is required",
              },
            
            })}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
           
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
         
          <input
            type="price"
            placeholder="price"
            {...register("price", {
              required: {
                value: true,
                message: "price is required",
              },
            
            })}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
           
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          
          <input
            type="minorder"
            placeholder="minorder"
            {...register("minorder", {
              required: {
                value: true,
                message: "minorder is required",
              },
            
            })}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
           
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          
          <input
            type="file"
            {...register("image", {
              required: {
                value: true,
                message: "image is required",
              },
             
            })}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
            
          </label>
        </div>

        <input
          className="btn w-full max-w-xs text-white"
          value="add"
          type="submit"
        />
      </form>
    </div>
    </div>
  );
};

export default AddProduct;
