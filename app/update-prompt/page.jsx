'use client'

import { Suspense } from "react";
import UpdatePrompts from "./layout";

function page() {

  return (
  <Suspense>
    <UpdatePrompts />
  </Suspense>
  )
}

export default page