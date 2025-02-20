import juan from 'assets/images/members/profile-staff-color-juan.png';
import jose from 'assets/images/members/profile-staff-color-jose.png';
import roberto from 'assets/images/members/profile-staff-color-roberto.png';
import nosh from 'assets/images/members/profile-staff-color-nosh.png';
import mario from 'assets/images/members/profile-staff-color-mario.png';
import lisi from 'assets/images/members/profile-staff-color-lisi.png';


export type TeamMemberType = {
    img: string;
    name: string,
    lastName: string;
    jobPosition: string;
}

export const TeamData =  [
    {
        img: juan,
        name: 'Juan',
        lastName: 'Kong',
        jobPosition: 'Chief Executive Officer'
    },
    {
        img: jose,
        name: 'Jose',
        lastName: 'Mock',
        jobPosition: 'Chief Operating Officer'
    },
    {
        img: roberto,
        name: 'Roberto',
        lastName: 'Chan',
        jobPosition: 'Tech Advisor'
    },
    {
        img: nosh,
        name: 'CY',
        lastName: 'Morph',
        jobPosition: 'Game Developer'
    },
    {
        img: mario,
        name: 'Zie',
        lastName: 'Chang',
        jobPosition: 'Art Director'
    },
    {
        img: lisi,
        name: 'Lisana',
        lastName: 'Chacon',
        jobPosition: 'Marketing Director'
    }
]