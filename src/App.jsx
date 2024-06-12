import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
export const App = () => {
    const users = [
        { userName: 'reactjs', name: 'React', initialIsFollowing: true },
        { userName: 'sveltejs', name: 'Svelte', initialIsFollowing: false },
        { userName: 'github', name: 'GitHub', initialIsFollowing: false },
        { userName: 'angular', name: 'Angular', initialIsFollowing: true },
        { userName: 'mongodb', name: 'MongoDB', initialIsFollowing: true },
        { userName: 'nextjs', name: 'Next.js', initialIsFollowing: false },
        { userName: 'graphql', name: 'GraphQL', initialIsFollowing: false },
    ];

    return (
        <>
            {users.map((user) => {
                const { userName, name, initialIsFollowing } = user;
                return (
                <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    name={name}
                    initialIsFollowing={initialIsFollowing}
                />
                )
            })}
        </>
    )
}