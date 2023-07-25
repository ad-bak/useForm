import Select from "react-select";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Email is invalid" }),
  website: z.string().url({ message: "Website is invalid" }),
  country: z.string().nonempty({ message: "Country is required" }),
  role: z.string().nonempty({ message: "Role is required" }),
});

const countryOptions = [
  { value: "United States", label: "United States" },
  { value: "Canada", label: "Canada" },
  { value: "Mexico", label: "Mexico" },
];

const roleOptions = [
  { value: "Admin", label: "Admin" },
  { value: "User", label: "User" },
  { value: "Guest", label: "Guest" },
];

// eslint-disable-next-line react/prop-types
const UserForm = ({ onSave, user = {} }) => {
  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: user,
    resolver: zodResolver(schema),
  });
  const { field } = useController({ name: "country", control });
  const { field: roleField } = useController({ name: "role", control });

  const { errors } = formState;

  const handleSelectChange = (option) => {
    field.onChange(option.value);
  };

  const handleRoleSelectChange = (option) => {
    roleField.onChange(option.value);
  };

  const handleSave = (formValues) => {
    onSave(formValues);
  };

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <div>
        <p>Name</p>
        <input {...register("name")} />
        <div style={{ color: "red" }}>{errors.name?.message}</div>
      </div>
      <div>
        <p>Email</p>
        <input {...register("email")} />
        <div style={{ color: "red" }}>{errors.email?.message}</div>
      </div>
      <div>
        <p>Website</p>
        <input {...register("website")} />
        <div style={{ color: "red" }}>{errors.website?.message}</div>
      </div>
      <div>
        <p>Country</p>
        <Select
          value={countryOptions.find(({ value }) => value === field.value)}
          onChange={handleSelectChange}
          options={countryOptions}
        />
        <div style={{ color: "red" }}>{errors.country?.message}</div>
      </div>
      <div>
        <p>Role</p>
        <Select
          value={roleOptions.find(({ value }) => value === roleField.value)}
          onChange={handleRoleSelectChange}
          options={roleOptions}
        />
        <div style={{ color: "red" }}>{errors.role?.message}</div>
      </div>
      <div style={{ marginTop: "12px" }}>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default UserForm;
