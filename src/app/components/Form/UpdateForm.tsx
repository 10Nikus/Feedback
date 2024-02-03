import FeedbuckButton from "../Header/FeedbackButton";
import CancelBtn from "./CancelBtn";

export default function Form({ id }: { id: number }) {
  return (
    <form className="bg-white p-10  flex flex-col gap-8">
      <h1 className="font-bold text-5xl">Give Feedback</h1>
      <div>
        <h1 className="font-bold">Feedback Title</h1>
        <p>Add a short, descriptive headline</p>
        <input
          type="text"
          className="bg-slate-200 w-full px-1 py-2 rounded-md"
          value="eeee"
          readOnly={false}
        />
      </div>
      <div>
        <h1 className="font-bold">Category</h1>
        <p>Choose a category for your feedback</p>
        <select className="bg-slate-200 w-full py-2 px-1 rounded-md">
          <option value="feature">Feature</option>
          <option value="ui">UI</option>
          <option value="ux">UX</option>
          <option value="enhancement">Enhancement</option>
          <option value="bug">Bug</option>
        </select>
      </div>
      <div>
        <h1 className="font-bold">Feedback Detail</h1>
        <p>
          Include any specific comments on what should be improved, added, etc.
        </p>
        <textarea className="bg-slate-200 w-full px-1 py-2 rounded-md" />
      </div>
      <div className="flex justify-end gap-2">
        <CancelBtn />
        <FeedbuckButton title="Update Feedback" link="/" />
      </div>
    </form>
  );
}
