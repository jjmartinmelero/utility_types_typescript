

// const promisedString = Promise.resolve("Hello");

// type ResolvedString = Awaited<typeof promisedString>;


async function getInfoFromGithub() {
    return fetch("https://api.github.com/users/jjmartinmelero")
        .then(res => res.json())
        .then(data => {
            const { name, avatar_url } = data as { name: string, avatar_url: string };
            return { name, avatar_url };
        });
}

const result = getInfoFromGithub();

type UserInfoFromGithubResponse = Awaited<ReturnType<typeof getInfoFromGithub>>;

const user: UserInfoFromGithubResponse = {
    name: "John Doe",
    avatar_url: "https://example.com/avatar.jpg"
};