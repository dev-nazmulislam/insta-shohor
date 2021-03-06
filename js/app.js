let posts = [];
const likedPostsId = [];
const reportedPostsId = [];

const getLikedPosts = () => {
  return posts.filter((post) => likedPostsId.includes(post.id));
};

const getReportedPosts = () => {
  return posts.filter((post) => reportedPostsId.includes(post.id));
};

const isLiked = (id) => {
  return likedPostsId?.length && !!likedPostsId.includes(id);
};

const addToLiked = (id) => {
  // Extra work on like button start unlike option
  if (likedPostsId.includes(id)) {
    likedPostsId.splice(likedPostsId.indexOf(id), 1);
    // Problem-01:There will be no plus, will be push.(Done)
  } else {
    likedPostsId.push(id);
  }
  // Only show remaining post without reported post
  const remainingPosts = posts.filter(
    (post) => !reportedPostsId.includes(post.id)
  );
  showPosts(remainingPosts);
};
const reportPost = (id) => {
  reportedPostsId.push(id);
  const remainingPosts = posts.filter(
    (post) => !reportedPostsId.includes(post.id)
  );
  showPosts(remainingPosts);
};

const displayContent = (text) => {
  return text.length < 30
    ? text // Problem-03: There will be text without qutetion. (Done)
    : text.slice(0, 30) + "<span class='fw-bold'>... read more</span>";
};

const switchTab = (id) => {
  if (id === "posts") {
    document.getElementById("posts").style.display = "grid";
    document.getElementById("liked").style.display = "none";
    document.getElementById("reported").style.display = "none";
  } else if (id === "liked") {
    document.getElementById("liked").style.display = "block";
    document.getElementById("posts").style.display = "none";
    document.getElementById("reported").style.display = "none";

    displayLikedPosts();
  } else {
    document.getElementById("reported").style.display = "block";
    document.getElementById("posts").style.display = "none";
    document.getElementById("liked").style.display = "none";

    displayReportedPosts();
  }
};

const createPost = (post) => {
  const image = post.image;
  const div = document.createElement("article");
  div.classList.add("post");
  div.innerHTML = `
              <div class="post__header">
                <div class="post__profile">
                  <a
                    href="https://github.com/ProgrammingHero1"
                    target="_blank"
                    class="post__avatar"
                  >
                    <img src="${post.userImage}" alt="User Picture" />
                    <!-- Problem-02: There will be post.userImage. not only image (Done) -->
                  </a>
                  <a href="#" class="post__user">phero</a>
                </div>

                <button class="post__more-options">
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
              </div>

              <div class="post__content">
                <div class="post__medias">
                  <img
                    class="post__media"
                    src="${image}"
                    alt="Post Content"
                  />
                </div>
              </div>

              <div class="post__footer">
                <div class="post__buttons">
                  <button class="post__button" onclick="addToLiked(${post.id})">
                  <i class="fa-solid fa-heart ${
                    isLiked(post.id) && "text-danger"
                  }"></i>
                    
                  </button>
                  <button class="post__button">
                    <i class="fa-solid fa-comment"></i>
                  </button>
                  

                  <div class="post__indicators"></div>

                  <button class="post__button post__button--align-right" onclick="reportPost(${
                    post.id
                  })">
                    <i class="fa-solid fa-ban"></i>
                  </button>
                </div>

                <div class="post__content">${displayContent(
                  post.description
                )}</div>

                <div class="post__infos">
                  <div class="post__likes">
                    <a href="#" class="post__likes-avatar">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="User Picture" />
                    </a>

                    <span>Liked by
                      <a class="post__name--underline" href="#">user123</a> and
                      <a href="#">73 others</a></span>
                  </div>

                  <hr/>

                  <div class="post__description">
                    <small>
                      <a class="post__name--underline" href="#">
                          ${post.comments[0]?.user}
                      </a>
                      ${post.comments[0]?.text}
                    </small>
                    <!-- Problem-04: There will be comments[0] (Done) -->
                  </div>
                  <span class="post__date-time">30 minutes ago</span>
                </div>
              </div>
      `;
  return div;
};

const showPosts = (posts) => {
  const productsContainer = document.getElementById("posts");
  productsContainer.innerHTML = "";

  posts.forEach((post) => {
    const div = createPost(post);
    productsContainer.appendChild(div);
  });
};

const displayLikedPosts = () => {
  const likePsotContainer = document.getElementById("liked");
  // Problem-06: Clear previuse liked post without defoult h1 tag. (Done)
  while (likePsotContainer.children.length > 1) {
    likePsotContainer.removeChild(likePsotContainer.lastChild);
  }
  const likedPosts = getLikedPosts();
  likedPosts.forEach((post) => {
    const div = createPost(post);
    likePsotContainer.appendChild(div);
  });
};

const displayReportedPosts = () => {
  const repotedPostContainer = document.getElementById("reported");
  // Problem-06: Clear previuse Reported post without defoult h1 tag. (Done)
  while (repotedPostContainer.children.length > 1) {
    repotedPostContainer.removeChild(repotedPostContainer.lastChild);
  }
  const reportedPosts = getReportedPosts();
  // Problem-05: There will be reportedPosts Not Post. (Done)
  reportedPosts.forEach((post) => {
    const div = createPost(post);
    repotedPostContainer.appendChild(div);
  });
};

const loadPosts = async () => {
  let data = await fetch("../data/posts.json");
  posts = await data.json();
  showPosts(posts);
};

loadPosts();

// Optional JavaScipt Code

const copyElementText = (id, btn) => {
  const text = document.getElementById(id);
  text.style.border = "2px solid blue";
  const textValue = text.innerText;

  const element = document.createElement("textarea");
  document.body.appendChild(element);
  element.value = textValue;
  element.select();
  document.execCommand("copy");
  document.body.removeChild(element);
  btn.classList.remove("fa-copy");
  btn.classList.add("fa-check");

  setTimeout(() => {
    text.style.border = "none";
    btn.classList.remove("fa-check");
    btn.classList.add("fa-copy");
  }, 2000);
};
