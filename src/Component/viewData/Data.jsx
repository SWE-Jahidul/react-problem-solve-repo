
import UseFatchData from "../hook/useFatchData"
const Data = () => {
    const users = UseFatchData("https://jsonplaceholder.typicode.com/users",
    (data) => data.map((item) =>({
        id:item.id,
        name :item.name
    })) );
    const posts = UseFatchData("https://jsonplaceholder.typicode.com/posts",
    (data) => data.slice(0,9)
    );


 
    return (
        <div className="row">

            <div className="col-lg-4 col-md-4 col-12">
                <h2>
                    Users
                </h2>
                <hr />
                {users.loading && <h3> loading... </h3>}
                {users.error && <h2>{users.error}</h2>}
                {users.data?.map((user) => (
                    <li key={user.id}>
                        {user.name}
                    </li>

                ))}


            </div>


            <div className="col-lg-4 col-md-4 col-12">
                <h2>
                Posts
                </h2>
                <hr />
                {posts.loading && <h3> loading... </h3>}
                {posts.error && <h2>{users.error}</h2>}
                {posts.data?.map((post) => (
                    <li key={post.id}>
                        {post.title}
                    </li>

                ))}


            </div>
        </div>
    )


}


export default Data; 