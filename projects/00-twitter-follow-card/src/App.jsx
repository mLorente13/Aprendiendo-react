import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="13_mLorente"
        name="mLorente_13"
        initialIsFollowing
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="midudev"
        name="Miguel Ángel Durán"
        initialIsFollowing={false}
      />
    </section>
  );
}