import Head from 'next/head';
import { Container } from '@/website/components/container';
import MobileLayout from '../../website/layout/mobile';
import DefaultButtons from '../../components/button/defaultButton';
import AnimateButtons from '../../components/button/animateButton';
import RoundedButtons from '../../components/button/RoundedButton';
import SizedButtons from '../../components/button/SizedButton';
import DisabledButtons from '../../components/button/disabledButton';
import OutlineButtons from '../../components/button/outlineButton';
import DefaultButtonSnippet from '../../website/snippets/buttons/default.mdx';
import AnimateButtonSnippet from '../../website/snippets/buttons/animate.mdx';
import RoundedButtonSnippet from '../../website/snippets/buttons/rounded.mdx';
import SizesButtonSnippet from '../../website/snippets/buttons/sizes.mdx';
import DisabledButtonSnippet from '../../website/snippets/buttons/disabled.mdx';
import OutlineButtonSnippet from '../../website/snippets/buttons/outline.mdx';

export default function ButtonPage() {
  return (
    <>
      <Head>
        <title>Buttons</title>
        <meta
          name="description"
          content="Kimia-ui provides many variants of buttons component including rounded, animated, outline and fully customisable according to your need"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Buttons
        </h1>
        <DefaultButtons />
        <DefaultButtonSnippet />
        <AnimateButtons />
        <AnimateButtonSnippet />
        <RoundedButtons />
        <RoundedButtonSnippet />
        <SizedButtons />
        <SizesButtonSnippet />
        <DisabledButtons />
        <DisabledButtonSnippet />
        <OutlineButtons />
        <OutlineButtonSnippet />
      </Container>
    </>
  );
}

ButtonPage.Layout = MobileLayout;
