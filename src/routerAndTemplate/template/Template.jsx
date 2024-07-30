import React from "react";
import { Outlet } from "react-router";
import Nav from "../../components/Nav";

export default function Template() {
  return (
    <>
      <Nav />
      <main className="py-16">
        <Outlet />
      </main>
    </>
  );
}
