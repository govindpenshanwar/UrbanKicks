import jwt from "jsonwebtoken";
const getUserInfo = (token) => {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    return decodedToken.username;
};


export async function getServerSideProps(context) {
    const authToken = context.req.cookies.token;
    const username = getUserInfo(authToken);

    return {
        props: { username }
    };
}
