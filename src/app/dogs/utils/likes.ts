const LIKES_KEY = "likedDogs";

export function getLikedDogs(): string[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(LIKES_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function toggleLikeDog(id: string): void {
  const likes = getLikedDogs();
  if (likes.includes(id)) {
    const newLikes = likes.filter((likeId) => likeId !== id);
    localStorage.setItem(LIKES_KEY, JSON.stringify(newLikes));
  } else {
    likes.push(id);
    localStorage.setItem(LIKES_KEY, JSON.stringify(likes));
  }
}

export function isDogLiked(id: string): boolean {
  const likes = getLikedDogs();
  return likes.includes(id);
}
