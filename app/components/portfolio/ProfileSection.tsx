import type { Profile } from "~/data/types";

export function ProfileSection({ profile }: { profile: Profile }) {
  const photo = profile.photo?.trim();

  return (
    <div className={photo ? "profile profile-with-photo" : "profile"}>
      {photo && (
        <img className="profile-photo" src={photo} alt="" width={80} height={80} />
      )}
      <div>
        <h1>{profile.name}</h1>
        <p>{profile.title}</p>
      </div>
    </div>
  );
}
