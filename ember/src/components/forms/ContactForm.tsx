import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});
type FormData = z.infer<typeof Schema>;

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } =
    useForm<FormData>({ resolver: zodResolver(Schema) });

  const onSubmit = async (data: FormData) => {
    // TODO: send to your API / webhook
    await new Promise((r) => setTimeout(r, 600));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-xl space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium">Name</label>
        <input {...register("name")} className="w-full rounded-lg border px-3 py-2" />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Email</label>
        <input {...register("email")} className="w-full rounded-lg border px-3 py-2" />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Message</label>
        <textarea rows={5} {...register("message")} className="w-full rounded-lg border px-3 py-2" />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>
      <button
        disabled={isSubmitting}
        className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white disabled:opacity-60 dark:bg-white dark:text-black"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
      {isSubmitSuccessful && (
        <p className="text-sm text-green-600">Thanks! We’ll get back to you shortly.</p>
      )}
    </form>
  );
}
