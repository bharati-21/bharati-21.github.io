const blogContainer = document.querySelector("ol.blog-list-container");

const url = "https://dev.to/api/articles?username=bharati21";
fetch(url)
	.then((res) => res.json())
	.then((blogs) => {
		updateBlogs(blogs);
	});

function updateBlogs(blogs) {
	console.log(blogs);
	blogContainer.innerHTML += blogs
		.map((post) => {
			return `<li class="blog-post">
            <div class="blog-post-container">
                <h2 class="lead-text">${post.title}</h2>
                <small class="blog-tags">
                    ${post.tag_list
						.map((tags) => {
							return `<span>${tags}</span>`;
						})
						.join("")}
                </small>
                <img class="blog-image" src=${post.social_image}>
                <p class="section-text blog-description">${post.description}</p>
                <div class="blog-post-details">
                    <div class="post-info">
                        <p class="blog-reading-time">
                            <i class="fa-solid fa-calendar"></i>
                            ${new Date(post.published_at).toLocaleDateString()}
                        </p>
                        <p class="blog-reading-time">
                            <i class="fa-solid fa-clock"></i>
                            ${post.reading_time_minutes} Minutes
                        </p>
                        <p class="blog-reading-time">
                            <i class="fa-solid fa-thumbs-up"></i>
                            ${post.positive_reactions_count}
                        </p>
                        <p class="blog-reading-time">
                            <i class="fa-solid fa-comment"></i>
                            ${post.comments_count}
                        </p>
                    </div>
                    <a href=${
						post.canonical_url
					} target="_blank" class="btn btn-primary btn-blog-read-more">Read More <i class="fa-solid fa-chevron-right"></i></a>
                </div>
                
            </div>
        </li>`;
		})
		.join("");
}
