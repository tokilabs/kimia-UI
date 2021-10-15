/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import Head from "next/head";
import "../plasmic-init";

export default function Host() {
  return (
    <div>
      <Head>
        <script src="https://static1.plasmic.app/preamble.js"></script>
      </Head>
      <PlasmicCanvasHost />
    </div>
  );
}
