import { boot } from 'quasar/wrappers';
import ui from 'src/components/ui';

export default boot(({ app }) => {
  Object.entries(ui).forEach(([name, component]) => {
    app.component(name, component);
  });
});
