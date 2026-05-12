import Card from "./components/Card";
const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://img.icons8.com/color/48/google-logo.png",
      companyName: "Google",
      datePosted: "3 days ago",
      post: "Frontend Developer",
      employementType: "Full-Time",
      position: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://img.icons8.com/?size=100&id=95294&format=png&color=000000",
      companyName: "Apple",
      datePosted: "5 days ago",
      post: "UI Engineer",
      employementType: "Full-Time",
      position: "Senior Level",
      pay: "$70/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://img.icons8.com/color/48/meta.png",
      companyName: "Meta",
      datePosted: "2 days ago",
      post: "React Developer",
      employementType: "Part-Time",
      position: "Junior Level",
      pay: "$50/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://img.icons8.com/color/48/amazon.png",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Software Engineer",
      employementType: "Full-Time",
      position: "Senior Level",
      pay: "$65/hr",
      location: "Chennai, India",
    },
    {
      brandLogo: "https://img.icons8.com/color/48/netflix.png",
      companyName: "Netflix",
      datePosted: "4 days ago",
      post: "Frontend Architect",
      employementType: "Full-Time",
      position: "Senior Level",
      pay: "$85/hr",
      location: "Remote, India",
    },
    {
      brandLogo: "https://img.icons8.com/color/48/microsoft.png",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Full Stack Developer",
      employementType: "Full-Time",
      position: "Junior Level",
      pay: "$55/hr",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://img.icons8.com/?size=100&id=gav46YArUSy1&format=png&color=000000",
      companyName: "Adobe",
      datePosted: "2 days ago",
      post: "Frontend Engineer",
      employementType: "Part-Time",
      position: "Senior Level",
      pay: "$60/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://img.icons8.com/?size=100&id=54113&format=png&color=000000",
      companyName: "Uber",
      datePosted: "5 days ago",
      post: "Web Developer",
      employementType: "Full-Time",
      position: "Junior Level",
      pay: "$48/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://img.icons8.com/color/48/airbnb.png",
      companyName: "Airbnb",
      datePosted: "3 days ago",
      post: "Frontend Developer",
      employementType: "Part-Time",
      position: "Senior Level",
      pay: "$75/hr",
      location: "Remote, India",
    },
    {
      brandLogo: "https://img.icons8.com/color/48/linkedin.png",
      companyName: "LinkedIn",
      datePosted: "1 day ago",
      post: "React Engineer",
      employementType: "Full-Time",
      position: "Junior Level",
      pay: "$52/hr",
      location: "Bangalore, India",
    },
  ];
  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
            brandLogo={elem.brandLogo}
            companyName={elem.companyName}
            datePosted={elem.datePosted}
            post={elem.post}
            employementType={elem.employementType}
            position={elem.position}
            pay={elem.pay}
            location={elem.location}
          />
          </div>
        );
      })}
    </div>
  );
};

export default App;
