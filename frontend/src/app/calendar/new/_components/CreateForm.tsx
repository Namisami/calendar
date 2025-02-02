"use client"

import Controller from "@/components/Controller";
import CustomAutocomplete from "@/components/CustomAutocomplete";
import FormProvider from "@/components/FormProvider";
import useForm from "@/hooks/useForm";
import { Button, FormLabel, Stack, styled, TextField } from "@mui/material";
import Link from "next/link";
import React from "react";
import { defaultValues, FormValues } from "./form";
import Select from "@/components/Select";

const timeOptions = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
]

const dayOptions = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
]

export default function CreateForm() {
  const form = useForm<FormValues>({defaultValues});

  return (
    <FormProvider {...form}>
      <Stack direction="column" gap={1}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
          <FormLabelFlex>Название</FormLabelFlex>
          <Controller
            {...form}
            name="title"
            render={({ onChange }) => (
              <TextFieldFlex onChange={onChange} />
            )}
          />
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
          <FormLabelFlex>Участники</FormLabelFlex>
          <Controller
            {...form}
            name="participiants"
            render={({ onChange }) => (
              <AutocompleteFlex 
                onChange={(_, value) => onChange(value)} 
                options={["2", "3"]} 
              />
            )}
          />
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
          <FormLabelFlex>День недели</FormLabelFlex>
          <Controller
            {...form}
            name="day"
            render={({ onChange }) => (
              <SelectFlex
                onChange={(_, value) => onChange(value)} 
                options={dayOptions} 
              />
            )}
          />
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
          <FormLabelFlex>Время мероприятия</FormLabelFlex>
          <Controller
            {...form}
            name="time"
            render={({ onChange }) => (
              <SelectFlex
                onChange={(_, value) => onChange(value)} 
                options={timeOptions} 
              />
            )}
          />
        </Stack>
        <Button type="submit" variant="contained">Создать</Button>
        <Link href="/calendar">
          <Button fullWidth color="error" variant="contained">Отменить</Button>
        </Link>
      </Stack>
    </FormProvider>
  )
};

const FormLabelFlex = styled(FormLabel)({ flex: 1 });
const TextFieldFlex = styled(TextField)({ flex: 1 });
const AutocompleteFlex = styled(CustomAutocomplete)({ flex: 1 });
const SelectFlex = styled(Select)({ flex: 1 });
