import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

const users = [
  {
    userName: "13_mLorente",
    name: "Marc Lorente Tur",
    isFollowing: true,
  },
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo H.",
    isFollowing: false,
  },
  {
    userName: "TMChein",
    name: "Tomas",
    isFollowing: true,
  },
];

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      {
        users.map(user => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}
            initialIsFollowing={isFollowing}
            formatUserName={formatUserName}
          ></TwitterFollowCard>
        );
      })}
    </section>
  );
}