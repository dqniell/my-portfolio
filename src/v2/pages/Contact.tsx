import { Screen, LinkButton } from "../ui"
import { profile } from "../data"

function Contact() {
  return (
    <Screen title="CONTACT" icon="💬">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        <div className="relative bg-white text-[#0b1020] rounded-2xl border-[3px] border-[#0b1020] px-6 py-5 shadow-[0_5px_0_#0b1020]">
          <p className="text-2xl">GG! Want to team up?</p>
          <p className="bs-body text-base mt-2">
            I'm looking for software engineering internships. The fastest way to reach me is email.
          </p>
          <span className="absolute -bottom-4 left-10 w-6 h-6 bg-white border-r-[3px] border-b-[3px] border-[#0b1020] rotate-45" />
        </div>

        <div className="bs-panel p-6 flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="bs-text-sm text-sm text-white/70">EMAIL</span>
            <span className="bs-text-sm text-2xl break-all select-all">{profile.email}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <LinkButton href={`mailto:${profile.email}`} yellow>SEND EMAIL</LinkButton>
            <LinkButton href={profile.linkedin}>LINKEDIN</LinkButton>
            <LinkButton href={profile.github}>GITHUB</LinkButton>
            <LinkButton href={profile.resume}>RESUME</LinkButton>
          </div>
        </div>
      </div>
    </Screen>
  )
}

export default Contact
