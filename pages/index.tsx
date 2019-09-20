export default () => {
  return (
    <div>
      <ul>
        <li>
          <a href="/props/simple">Props simple</a>
        </li>
        <li>
          <a href="/props/objeto">Props objeto</a>
        </li>
        <li>
          <a href="/props/children">Props children</a>
        </li>
        <ul>
          <ul>
            <li>
              <a href="/props/withoutContext">Props without context</a>
            </li>
          </ul>
        </ul>
        <ul>
          <li>
            <a href="/hooks/state">Hooks state</a>
          </li>
          <li>
            <a href="/hooks/effect">Hooks effect</a>
          </li>
        </ul>
        <ul>
          <ul>
            <li>
              <a href="/context/simple">Context simple</a>
            </li>
            <li>
              <a href="/context/complex">Context complex</a>
            </li>
          </ul>
        </ul>
      </ul>
    </div>
  );
};
