import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: 'fdl242',
      label: 'Can I use React on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 'fdl246',
      label: 'Can I use Javascript on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 'fdl222',
      label: 'Can I use CSS on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
  ];

  return <Accordion items={items} />;
}

export default App;
