import {
  art,
  cultural,
  education,
  environmental,
  exciting,
  healthcare,
  political,
  space,
  sports,
  techGiant,
} from "../assets/images";
export const posts = [
  {
    id: 1,
    image: exciting,
    date: "2023-11-20",
    title: "Exciting Discovery in Science",
    description:
      "Scientists have made a groundbreaking discovery that could revolutionize the way we perceive the universe. The new findings challenge existing theories and open up new possibilities for future exploration and understanding of the cosmos.",
    author: "John Doe",
    category: "Science",
    comments: [
      { commenter: "Alice", comment: "This is amazing!" },
      { commenter: "Bob", comment: "I never thought I'd see the day!" },
      { commenter: "Charlie", comment: "Science is advancing so quickly!" },
    ],
  },
  {
    id: 2,
    image: techGiant,
    date: "2023-11-19",
    title: "Tech Giants Announce New Collaboration",
    description:
      "In a surprising move, leading tech companies have announced a collaborative effort to address environmental challenges and promote sustainability. The partnership aims to leverage technology for positive environmental impact and reshape industry practices.",
    author: "Jane Smith",
    category: "Technology",
    comments: [
      { commenter: "David", comment: "Great initiative!" },
      { commenter: "Eva", comment: "I hope they make a real impact." },
      {
        commenter: "Frank",
        comment: "About time they focused on sustainability.",
      },
    ],
  },
  {
    id: 3,
    image: political,
    date: "2023-11-18",
    title: "Political Developments Unfold",
    description:
      "Recent political events have taken unexpected turns, shaping the landscape of international relations. Leaders engage in diplomatic dialogues, raising hopes for resolution in longstanding conflicts while introducing new challenges for global cooperation.",
    author: "Alex Johnson",
    category: "Politics",
    comments: [
      { commenter: "Grace", comment: "It's a complex situation." },
      { commenter: "Henry", comment: "Diplomacy is crucial in these times." },
      {
        commenter: "Isabella",
        comment: "I wonder how this will impact us locally.",
      },
    ],
  },

  {
    id: 4,
    image: cultural,
    date: "2023-11-17",
    title: "Cultural Festival Celebrates Diversity",
    description:
      "A vibrant cultural festival took place, showcasing the rich tapestry of traditions and heritage from around the world. Attendees enjoyed music, dance, and cuisine, fostering a sense of unity and appreciation for cultural diversity.",
    author: "Sophie Brown",
    category: "Culture",
    comments: [
      { commenter: "Liam", comment: "It's wonderful to celebrate diversity!" },
      { commenter: "Olivia", comment: "I loved the performances." },
      {
        commenter: "Mason",
        comment: "Events like these bring people together.",
      },
    ],
  },
  {
    id: 5,
    image: healthcare,
    date: "2023-11-16",
    title: "Healthcare Innovations for the Future",
    description:
      "Advancements in healthcare technology are paving the way for a healthier future. From groundbreaking treatments to AI-driven diagnostics, the medical field is on the brink of transformative changes that could significantly improve patient outcomes.",
    author: "Michael Turner",
    category: "Health",
    comments: [
      { commenter: "Ava", comment: "Exciting times for healthcare!" },
      {
        commenter: "Noah",
        comment: "I hope these innovations become accessible to all.",
      },
      {
        commenter: "Sophia",
        comment: "Healthcare technology is evolving rapidly.",
      },
    ],
  },
  {
    id: 6,
    image: sports,
    date: "2023-11-15",
    title: "Sports Championship: A Nail-Biting Finish",
    description:
      "The sports world witnessed a thrilling championship finale as teams competed fiercely for the coveted trophy. The match concluded with a nail-biting finish, leaving fans on the edge of their seats and sparking debates about sportsmanship and strategy.",
    author: "Daniel Miller",
    category: "Sports",
    comments: [
      { commenter: "Emma", comment: "What an intense match!" },
      { commenter: "Jackson", comment: "Both teams gave it their all." },
      { commenter: "Aiden", comment: "I can't believe that last-minute play!" },
    ],
  },

  {
    id: 7,
    image: environmental,
    date: "2023-11-14",
    title: "Environmental Conservation Initiative Launched",
    description:
      "A new environmental conservation initiative has been launched, aiming to address pressing issues such as climate change and biodiversity loss. Experts and activists are hopeful that this initiative will inspire global efforts towards a more sustainable future.",
    author: "Natalie Green",
    category: "Environment",
    comments: [
      { commenter: "William", comment: "We need more initiatives like this." },
      { commenter: "Chloe", comment: "Hope it brings about positive change." },
      { commenter: "James", comment: "Individual actions matter too." },
    ],
  },
  {
    id: 8,
    image: art,
    date: "2023-11-13",
    title: "Art Exhibition Showcases Local Talent",
    description:
      "A local art exhibition is gaining attention for featuring the works of talented artists from the community. The diverse range of artistic expressions includes paintings, sculptures, and digital art, providing a platform for local creatives to shine.",
    author: "Sophie Williams",
    category: "Art",
    comments: [
      { commenter: "Ethan", comment: "The local art scene is thriving." },
      {
        commenter: "Madison",
        comment: "I'm impressed by the variety of artworks.",
      },
      { commenter: "Logan", comment: "Supporting local artists is important." },
    ],
  },
  {
    id: 9,
    image: space,
    date: "2023-11-12",
    title: "Space Exploration: New Mission Unveiled",
    description:
      "NASA has announced a new space exploration mission that aims to uncover mysteries beyond our solar system. Scientists and astronomers are eagerly anticipating the data and discoveries that may reshape our understanding of the universe.",
    author: "Ryan Johnson",
    category: "Science",
    comments: [
      { commenter: "Aria", comment: "Space exploration is always exciting." },
      { commenter: "Carter", comment: "Can't wait for the mission updates." },
      { commenter: "Penelope", comment: "The cosmos holds so many secrets." },
    ],
  },
  {
    id: 10,
    image: education,
    date: "2023-11-11",
    title: "Education Reforms: Shaping the Future of Learning",
    description:
      "Education policymakers have unveiled a series of reforms designed to enhance the quality of education and adapt to the evolving needs of students. The reforms include innovative teaching methods, updated curriculum, and a focus on digital literacy.",
    author: "Jordan Davis",
    category: "Education",
    comments: [
      {
        commenter: "Grace",
        comment: "Quality education is crucial for progress.",
      },
      {
        commenter: "Henry",
        comment: "Adapting to new learning methods is essential.",
      },
      {
        commenter: "Isabella",
        comment: "Hope these reforms benefit students.",
      },
    ],
  },
];
