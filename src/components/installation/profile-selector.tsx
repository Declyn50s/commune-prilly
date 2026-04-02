import { motion } from "framer-motion";
import type { InstallationProfile, InstallProfileKey } from "@/types/content";
import { cn } from "@/lib/utils";

export function ProfileSelector({
  profiles,
  value,
  onChange,
}: {
  profiles: InstallationProfile[];
  value: InstallProfileKey;
  onChange: (value: InstallProfileKey) => void;
}) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {profiles.map((profile) => {
        const active = profile.key === value;
        return (
          <button
            key={profile.key}
            type="button"
            className={cn(
              "focus-ring relative overflow-hidden rounded-[1.75rem] border p-5 text-left transition",
              active ? "border-prilly-red/20 bg-white shadow-float" : "border-black/8 bg-white/85 hover:border-prilly-yellow/40 hover:bg-white",
            )}
            onClick={() => onChange(profile.key)}
          >
            {active ? (
              <motion.div
                layoutId="profile-selector"
                className="absolute inset-0 rounded-[1.75rem] border border-prilly-red/20"
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            ) : null}
            <div className="relative">
              <p className="text-base font-semibold text-prilly-coal">{profile.label}</p>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/70">{profile.description}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
