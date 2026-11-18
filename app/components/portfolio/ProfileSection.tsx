import type { Profile } from "~/data/types";

export function ProfileSection({ profile }: { profile: Profile }) {
  return (
    <div className="resume-profile">
      {profile.photo && (
        <img src={profile.photo} alt={`${profile.name} 프로필 사진`} width={72} height={72} />
      )}
      <div>
        <h1>{profile.name}</h1>
        <p>{profile.title}</p>
      </div>
    </div>
  );
}
