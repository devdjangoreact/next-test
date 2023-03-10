import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import styles from "../../styles/user.module.scss";

export default function User({ user }) {
  const router = useRouter();
  //   const { query } = useRouter();
  //   console.log(query);
  return (
    <MainContainer keywords={user.name}>
      <div className={styles.user}>
        <button type="button" onClick={() => router.back()}>
          Click here to go back
        </button>
        <h1>User id {router.query.id}</h1>
        <div>User - {user.name}</div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
