import DatePicker from '@fork-anyone/vue2-datepicker';
import nb from 'date-format-parse/lib/locale/nb';

const lang = {
  formatLocale: nb,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('nb', lang);

export default lang;
