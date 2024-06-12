import MainLayout from "@/components/layouts/MainLayout";
import { NextPageWithLayout } from "../_app";
import LoginForm from "@/components/auth/LoginForm";
import Head from "next/head";

const LoginPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Login - MEONO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="flex justify-center items-center h-screen">
        <LoginForm />
      </div>
    </>
  );
};

LoginPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default LoginPage;
