import { NestedPeerListIcons } from "@/assets/PeerListIcons";
import Dropdown from "@/components/common/Dropdown";
import { cn } from "@/utils/helpers";
import Image from "next/image";
import React from "react";
import HostData from "./PeerRole/HostData";
import CoHostData from "./PeerRole/CoHostData";
import SpeakerData from "./PeerRole/SpeakerData";
import ListenersData from "./PeerRole/ListenersData";

interface PeerMetaDatProps {
  role: "host" | "co-host" | "speaker" | "listeners";
  className?: string;
  isHandRaised?: boolean;
  isMicActive?: boolean;
  name: string;
  src: string;
}

const PeerMetaData: React.FC<PeerMetaDatProps> = ({
  isHandRaised,
  className,
  isMicActive,
  name,
  src,
  role,
}) => {
  const RoleData = {
    host: <HostData />,
    "co-host": <CoHostData />,
    speaker: <SpeakerData />,
    listeners: <ListenersData />,
  } as const;

  return (
    <div className={cn(className, "flex items-center justify-between w-full")}>
      <div className="flex items-center gap-2">
        <Image
          src={src}
          alt="default"
          width={30}
          height={30}
          priority
          quality={100}
          className="object-contain"
        />
        <div className="text-slate-400 tex-sm font-normal">{name}</div>
      </div>
      <div className="flex items-center gap-3">
        <div>{NestedPeerListIcons.inactive.hand}</div>
        <div>{NestedPeerListIcons.inactive.mic}</div>

        <Dropdown
          triggerChild={<div>{NestedPeerListIcons.inactive.more}</div>}
          align="end"
        >
          {RoleData[role]}
        </Dropdown>
      </div>
    </div>
  );
};

export default React.memo(PeerMetaData);
