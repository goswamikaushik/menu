import Accrodion from "../components/Accrodion";

const AccrodionPage = () => {
  const items = [
    {
      id: 1,
      lable: "Can I use React on a project ?",
      content:
        "You can use React on any project you want, You can use Javascript on any project you want, You can use Javascript on any project you want",
    },
    {
      id: 2,
      lable: "Can I use Javascript on a project ?",
      content:
        "You can use Javascript on any project you want, You can use Javascript on any project you want, You can use Javascript on any project you want",
    },
    {
      id: 3,
      lable: "Can I use CSS on a project ?",
      content:
        "You can use CSS on any project you want, You can use Javascript on any project you want, You can use Javascript on any project you want",
    },
  ];
  return (
    <div>
      <Accrodion items={items} />
    </div>
  );
};

export default AccrodionPage;