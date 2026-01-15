import { useForm, type SubmitHandler } from "react-hook-form";
import { type Goal } from "./CourseGoals";

type Input = {
  title: string;
  description: string;
};

interface NewGoalProps {
  onAddGoal: (goal: Goal) => void;
}

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newGoal: Goal = {
      id: Math.random(),
      title: data.title,
      description: data.description,
    };
    onAddGoal(newGoal);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input
          id="goal"
          type="text"
          maxLength={30}
          placeholder="Set your gol here"
          {...register("title", { required: true })}
        />
        <p className="charCount">{watch("title")?.length || 0}/30 characters</p>
        {errors.title && <p className="errorMsg">This field is required</p>}
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input
          id="summary"
          type="text"
          maxLength={100}
          placeholder="Write a short summary of your goal"
          {...register("description", { required: true })}
        />
        <p className="charCount">{watch("description")?.length || 0}/100 characters</p>
        {errors.description && (
          <p className="errorMsg">This field is required</p>
        )}
      </p>
      <p>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Goal"}
        </button>
      </p>
    </form>
  );
}
