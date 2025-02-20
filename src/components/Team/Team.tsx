import {TeamPodWrapper, TeamWrapper} from "./Team.styles";
import {TeamMember} from "../TeamMember/TeamMember";
import {TeamData, TeamMemberType} from './TeamData';
import teamPod from 'assets/images/team_pod.png';
import podLines from 'assets/images/team_pod_lines.svg';



export const Team = (): JSX.Element => {
    return (
        <>
            <TeamWrapper id='team'>
                {
                    TeamData.map((member: TeamMemberType) => (
                        <TeamMember img={member.img} name={member.name} lastName={member.lastName}
                                    jobPosition={member.jobPosition}/>
                    ))
                }

            </TeamWrapper>
            <TeamPodWrapper>
                <img src={teamPod} alt='Team Pod' width={160} id='pod'/>
                <img src={podLines} alt='Team Pod' width={800} id='lines'/>
            </TeamPodWrapper>
        </>

    )
}