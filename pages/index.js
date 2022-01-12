import Head from "next/head";
import Image from "next/image";
import AppHeader from "../components/AppHeader";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <AppHeader></AppHeader>
      <h1>Homepage</h1>
    </div>
  );
}
