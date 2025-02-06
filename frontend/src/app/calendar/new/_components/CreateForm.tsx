"use client"

import Controller from "@/components/Controller";
import CustomAutocomplete from "@/components/CustomAutocomplete";
import FormProvider from "@/components/FormProvider";
import useForm from "@/hooks/useForm";
import { Alert, Button, FormLabel, Skeleton, Stack, styled, TextField } from "@mui/material";
import Link from "next/link";
import React, { FormEvent, useMemo, useState } from "react";
import { defaultValues, FormValues } from "./form";
import Select from "@/components/Select";
import { useCreateTaskMutation, useGetUsersQuery } from "@/api/base";
import { TaskRequest } from "@/api/base.types";

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
  const [error, setError] = useState<string | null>(null);

  const [createTask] = useCreateTaskMutation();
  const { data: users, isLoading } = useGetUsersQuery();

  const usersOptions = useMemo(() => users?.map((user) => user.username) ?? [], [users]);

  const form = useForm<FormValues>({defaultValues});

  const submitHandler = async (e: FormEvent<HTMLFormElement>, state: FormValues) => {
    e.preventDefault();
    const {error} = await createTask({...state} as TaskRequest);
    if (error && 'data' in error) setError(error.data as string);
    else setError(null);
  }

  if (isLoading) return <Skeleton />

  return (
    <FormProvider onSubmit={submitHandler} {...form}>
      {error && <Alert severity="error">{error}</Alert>}
      <Stack direction="column" gap={1}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
          <FormLabelFlex>Название</FormLabelFlex>
          <Controller
            {...form}
            name="title"
            render={({ value, onChange }) => (
              <TextFieldFlex value={value} onChange={onChange} />
            )}
          />
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
          <FormLabelFlex>Участники</FormLabelFlex>
          <Controller
            {...form}
            name="participiants"
            render={({ value, onChange }) => (
              <AutocompleteFlex
                value={value} 
                onChange={(_, value) => onChange(value)} 
                options={usersOptions} 
              />
            )}
          />
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
          <FormLabelFlex>День недели</FormLabelFlex>
          <Controller
            {...form}
            name="day"
            render={({ value, onChange }) => (
              <SelectFlex
                value={value === -1 ? "" : dayOptions[value]}
                onChange={(_, value) => onChange(value ? dayOptions.indexOf(value) : -1)} 
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
            render={({ value, onChange }) => (
              <SelectFlex
                value={value}
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
