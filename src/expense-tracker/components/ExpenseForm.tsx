//import { categories } from "../../App";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import categories from "../categories";
import { useEffect, useRef } from "react";

const expenseSchema = z.object({
  description: z
    .string()
    .min(3, "Description must contain minimum 3 characters.")
    .max(50, "Description can have only maximum of 50 characters."),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(0.01, "Amount cannot be less than 1 cent")
    .max(100_000, "Amount cannot be more than $100,000 USD."),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});
type ExpenseFormData = z.infer<typeof expenseSchema>;
interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}
const ExpenseForm = ({ onSubmit }: Props) => {
  // after rendering the form
  //TODO: need to fix this issue of validation error
  //const refDescription = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(expenseSchema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          //ref={refDescription}
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="text"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary">Add</button>
    </form>
  );
};

export default ExpenseForm;
