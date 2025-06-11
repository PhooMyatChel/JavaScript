// components/ContactForm.js
"use client";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  FormHelperText,
} from "@mui/material";
import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { schema} from "./Validation";

// Example Cities and Townships
const CITIES = [
  { value: "yangon", label: "Yangon" },
  { value: "mandalay", label: "Mandalay" },
  { value: "naypyitaw", label: "Naypyitaw" },
];

const TOWNSHIPS = [
  { value: "hlaing", label: "Hlaing" },
  { value: "kamayut", label: "Kamayut" },
  { value: "sanchaung", label: "Sanchaung" },
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      township: "",
    },
  });

  const onSubmit = (formData) => {
    console.log("Form Data:", formData);//log the form data
    console.log("Name Input Data",formData.name);
    reset();//reset the form data
  };

  return (
    <Box component="form" sx={{ p: 2 }} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Name"
        fullWidth
        sx={{ mb: 2 }}
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Email"
        fullWidth
        sx={{ mb: 2 }}
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Phone No."
        fullWidth
        sx={{ mb: 2 }}
        {...register("phone")}
        error={!!errors.phone}
        helperText={errors.phone?.message}
      />
      <TextField
        label="Address"
        fullWidth
        sx={{ mb: 2 }}
        {...register("address")}
        error={!!errors.address}
        helperText={errors.address?.message}
      />

      {/* City Selector */}
      <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.city}>
        <InputLabel id="city-label">City</InputLabel>
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              labelId="city-label"
              label="City"
              value={field.value || ""}
            >
              {CITIES.map((city,index) => (
                <MenuItem key={index} value={city.value}>
                  {city.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText>{errors.city?.message}</FormHelperText>
      </FormControl>

      {/* Township Selector */}
      <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.township}>
        <InputLabel id="township-label">Township</InputLabel>
        <Controller
          name="township"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              labelId="township-label"
              label="Township"
              value={field.value || ""}
            >
              {TOWNSHIPS.map((township,index) => (
                <MenuItem key={index} value={township.value}>
                  {township.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText>{errors.township?.message}</FormHelperText>
      </FormControl>

      <Button variant="contained" type="submit">
        Save
      </Button>
    </Box>
  );
}
