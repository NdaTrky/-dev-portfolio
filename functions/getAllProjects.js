import { GraphQLClient, gql } from 'graphql-request';

// Hygraph API endpoint'inizi ve yetkilendirme token'ınızı çevresel değişkenlerden alın
const HYGRAPH_ENDPOINT = process.env.NEXT_PUBLIC_HYGRAPH_URL;


// GraphQL istemcisini oluşturun
const hygraphClient = new GraphQLClient(HYGRAPH_ENDPOINT, {
  headers: {
   
  },
});

// Tüm projeleri almak için GraphQL sorgusunu tanımlayın
const GET_ALL_PROJECTS_QUERY = gql`
  {
    projects {
      id
      title
      description
      tags
      image {
        url
      }
      source
    }
  }
`;

// Tüm projeleri almak için fonksiyonu tanımlayın
export const getAllProjects = async () => {
  try {
    const { projects } = await hygraphClient.request(GET_ALL_PROJECTS_QUERY);
    return projects;
  } catch (error) {
    console.error('Hata:', error);
    throw error; // Hata durumunda hatayı fırlatın
  }
};
