import { ThemeProvider } from '@mui/material';
import { SWRConfig } from 'swr';
import theme from '@/theme';
import { Layout } from '@/components/Layout';
import '@/styles/global.scss';

const swrConfig = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  dedupingInterval: 10000
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig value={swrConfig}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </ThemeProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object
};

MyApp.defaultProps = {
  pageProps: {}
};

export default MyApp;
