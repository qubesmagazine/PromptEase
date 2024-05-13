import { Suspense } from "react";
import UpdatePrompts from "./layout";

function UpdatePrompt() {
  return (
  <Suspense fallback={<div>Loading...</div>}>
    <UpdatePrompts />
  </Suspense>
  )
}

export default UpdatePrompt