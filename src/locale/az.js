import DatePicker from '@fork-anyone/vue2-datepicker';
import az from 'date-format-parse/lib/locale/az';

const lang = {
  formatLocale: az,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('az', lang);

export default lang;
