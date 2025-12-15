import type { Profile } from "~/data/types";

interface ProfileSectionProps {
  profile: Profile;
}

/**
 * 기본 정보 섹션
 * 이름, 직함, 프로필 사진을 표시합니다.
 */
export function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <section className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
      {profile.photo ? (
        <img
          src={profile.photo}
          alt={`${profile.name} 프로필 사진`}
          className="h-32 w-32 rounded-full object-cover border-4 border-primary/20"
        />
      ) : (
        <div className="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center text-4xl font-bold text-primary">
          {profile.name.charAt(0)}
        </div>
      )}
      <div className="text-center sm:text-left">
        <h1 className="text-3xl font-bold text-foreground">{profile.name}</h1>
        <p className="text-xl text-primary font-medium mt-1">{profile.title}</p>
      </div>
    </section>
  );
}


