import dynamic from 'next/dynamic';

const LoadingComp = {
  loading: () => <p>Loading888</p>
}

const Templates = {
  'common/menu': dynamic(import('modules/common/header/views/mobileMenu'))
};

export default Templates;
