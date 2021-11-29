import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
    mutation addProfile($username: String!, $email: String!, $password: String!) {
        addProfile(username: $username, email: $email, password: $password) {
            token
            profile {
                _id
                username
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            profile {
                _id
                username
            }
        }
    }
`;

export const ADD_SKILL = gql`
    mutation addSkill($skill: SkillInput!) {
        addSkill(skill: $skill) {
            _id
            username
            email
            skills {
                technicalSkills
                language
                softSkills
                interests
            }
        }
    }
`

export const ADD_EDUCATION = gql`
    mutation addEducation($school: String!, $degree: String!, $major: String!, $gpa: String!, $graduationDate: String!, $certifications: String, $owner: ID) {
        addEducation(school: $school, degree: $degree, major: $major, gpa: $gpa, graduationDate: $graduationDate, certifications: $certifications, owner: $owner) {
            school
            degree
            major
            gpa
            graduationDate
            certifications
            owner
        }
    }
`;

// export const ADD_EDUCATION = gql`
//     mutation addEducation($educationData: EducationInput!) {
//         addEducation(educationData: $educationData) {
//             educations {
//                 school
//                 degree
//                 major
//                 gpa
//                 graduationDate
//                 certifications
//             }
//         }
//     }
// `;

export const ADD_EXPERIENCE = gql`
    mutation addExperience($organization: String!, $position: String!, $startDate: String!, $endDate: String!, $location: String!, $description: String!) {
        addExperience(organization: $organization, position: $position, startDate: $startDate, endDate: $endDate, location: $location, description: $description) {
            organization
            position
            startDate
            endDate
            location
            description
        }
    }
`;

export const REMOVE_EDUCATION = gql`
    mutation removeEducation($educationId: ID!) {
        removeEducation(educationId: $educationId) {
            educationId
        }
    }
`;

export const REMOVE_EXPERIENCE = gql`
    mutation removeExperience($experienceId: ID!) {
        removeExperience(experienceId: $experienceId) {
           experienceId 
        }
    }
`;
