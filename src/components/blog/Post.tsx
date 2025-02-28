"use client";

import { Column, Flex, Heading, SmartImage, SmartLink, Tag, Text } from "@/once-ui/components";
import styles from "./Posts.module.scss";
import { formatDate } from "@/app/utils/formatDate";

interface PostProps {
  post: any;
  thumbnail: boolean;
}

export default function Post({ post, thumbnail }: PostProps) {
  return (
    <>
    <SmartLink
      fillWidth
      className={styles.hover}
      unstyled
      key={post.slug}
      href="https://visorreality1.vercel.app"
    >
      <Flex
        position="relative"
        mobileDirection="column"
        fillWidth
        paddingY="12"
        paddingX="16"
        gap="32"
      >
        {post.metadata.image && thumbnail && (
          <SmartImage
            priority
            maxWidth={20}
            className={styles.image}
            sizes="640px"
            border="neutral-alpha-weak"
            cursor="interactive"
            radius="m"
            src="/visor.png"
            alt={"Thumbnail of " + post.metadata.title}
            aspectRatio="16 / 9"
          />
        )}
        <Column position="relative" fillWidth gap="8" vertical="center">
          <Heading as="h2" variant="heading-strong-l" wrap="balance">
            E-commerce website Live Preview
          </Heading>
          <Text variant="label-default-s" onBackground="neutral-weak">
            click here view the website 
          </Text>
          {/* {post.metadata.tag && (
            <Tag className="mt-8" label={post.metadata.tag} variant="neutral" />
          )} */}
        </Column>
      </Flex>
    </SmartLink>
     <hr style={{width:'70%'}}/>

    <SmartLink
      fillWidth
      className={styles.hover}
      unstyled
      key={post.slug}
      href="https://youtu.be/SKCz5GxwvxI"
    >
      <Flex
        position="relative"
        mobileDirection="column"
        fillWidth
        paddingY="12"
        paddingX="16"
        gap="32"
      >

        <Column position="relative" fillWidth gap="8" vertical="center">
          <Heading as="h2" variant="heading-strong-l" wrap="balance">
            E-commerce website's Recorded Video
          </Heading>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Click here to watch the video
          </Text>
          {/* {post.metadata.tag && (
            <Tag className="mt-8" label={post.metadata.tag} variant="neutral" />
          )} */}
        </Column>
        {post.metadata.image && thumbnail && (
          <SmartImage
            priority
            maxWidth={20}
            className={styles.image}
            sizes="640px"
            border="neutral-alpha-weak"
            cursor="interactive"
            radius="m"
            src='/visor-you.png'
            alt={"Thumbnail of " + post.metadata.title}
            aspectRatio="16 / 9"
          />
        )}
      </Flex>
    </SmartLink>
    <hr style={{width:'70%'}}/>
    <SmartLink
      fillWidth
      className={styles.hover}
      unstyled
      key={post.slug}
      href="https://connectclc.com"
    >
      <Flex
        position="relative"
        mobileDirection="column"
        fillWidth
        paddingY="12"
        paddingX="16"
        gap="32"
      >
        {post.metadata.image && thumbnail && (
          <SmartImage
            priority
            maxWidth={20}
            className={styles.image}
            sizes="640px"
            border="neutral-alpha-weak"
            cursor="interactive"
            radius="m"
            src="/connect logistic.png"
            alt={"Thumbnail of " + post.metadata.title}
            aspectRatio="16 / 9"
          />
        )}
        <Column position="relative" fillWidth gap="8" vertical="center">
          <Heading as="h2" variant="heading-strong-l" wrap="balance">
            Static website Live Preview
          </Heading>
          <Text variant="label-default-s" onBackground="neutral-weak">
            click here view the website 
          </Text>
          {/* {post.metadata.tag && (
            <Tag className="mt-8" label={post.metadata.tag} variant="neutral" />
          )} */}
        </Column>
      </Flex>
    </SmartLink>
     <hr style={{width:'70%'}}/>



     <SmartLink
      fillWidth
      className={styles.hover}
      unstyled
      key={post.slug}
      href="https://youtu.be/xwqr_f-VbZQ"
    >
      <Flex
        position="relative"
        mobileDirection="column"
        fillWidth
        paddingY="12"
        paddingX="16"
        gap="32"
      >

        <Column position="relative" fillWidth gap="8" vertical="center">
          <Heading as="h2" variant="heading-strong-l" wrap="balance">
            Static website's Recorded Video
          </Heading>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Click here to watch the video
          </Text>
          {/* {post.metadata.tag && (
            <Tag className="mt-8" label={post.metadata.tag} variant="neutral" />
          )} */}
        </Column>
        {post.metadata.image && thumbnail && (
          <SmartImage
            priority
            maxWidth={20}
            className={styles.image}
            sizes="640px"
            border="neutral-alpha-weak"
            cursor="interactive"
            radius="m"
            src='/connect-you.png'
            alt={"Thumbnail of " + post.metadata.title}
            aspectRatio="16 / 9"
          />
        )}
      </Flex>
    </SmartLink>

    <hr style={{width:'70%'}}/>

    <SmartLink
      fillWidth
      className={styles.hover}
      unstyled
      key={post.slug}
      href="https://learnhigh.in"
    >
      <Flex
        position="relative"
        mobileDirection="column"
        fillWidth
        paddingY="12"
        paddingX="16"
        gap="32"
      >
        {post.metadata.image && thumbnail && (
          <SmartImage
            priority
            maxWidth={20}
            className={styles.image}
            sizes="640px"
            border="neutral-alpha-weak"
            cursor="interactive"
            radius="m"
            src="/learn high.png"
            alt={"Thumbnail of " + post.metadata.title}
            aspectRatio="16 / 9"
          />
        )}
        <Column position="relative" fillWidth gap="8" vertical="center">
          <Heading as="h2" variant="heading-strong-l" wrap="balance">
            Static website Live Preview
          </Heading>
          <Text variant="label-default-s" onBackground="neutral-weak">
            click here view the website 
          </Text>
          {/* {post.metadata.tag && (
            <Tag className="mt-8" label={post.metadata.tag} variant="neutral" />
          )} */}
        </Column>
      </Flex>
    </SmartLink>
     <hr style={{width:'70%'}}/>

     <SmartLink
      fillWidth
      className={styles.hover}
      unstyled
      key={post.slug}
      href=" https://youtu.be/A96LtjH2hAw"
    >
      <Flex
        position="relative"
        mobileDirection="column"
        fillWidth
        paddingY="12"
        paddingX="16"
        gap="32"
      >

        <Column position="relative" fillWidth gap="8" vertical="center">
          <Heading as="h2" variant="heading-strong-l" wrap="balance">
            Static website's Recorded Video
          </Heading>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Click here to watch the video
          </Text>
          {/* {post.metadata.tag && (
            <Tag className="mt-8" label={post.metadata.tag} variant="neutral" />
          )} */}
        </Column>
        {post.metadata.image && thumbnail && (
          <SmartImage
            priority
            maxWidth={20}
            className={styles.image}
            sizes="640px"
            border="neutral-alpha-weak"
            cursor="interactive"
            radius="m"
            src='/learn-you.png'
            alt={"Thumbnail of " + post.metadata.title}
            aspectRatio="16 / 9"
          />
        )}
      </Flex>
    </SmartLink>

    <hr style={{width:'70%'}}/>


    <SmartLink
      fillWidth
      className={styles.hover}
      unstyled
      key={post.slug}
      href="https://youtu.be/uPO1Y-VJ6Dk
"
    >
      <Flex
        position="relative"
        mobileDirection="column"
        fillWidth
        paddingY="12"
        paddingX="16"
        gap="32"
      >
        {post.metadata.image && thumbnail && (
          <SmartImage
            priority
            maxWidth={20}
            className={styles.image}
            sizes="640px"
            border="neutral-alpha-weak"
            cursor="interactive"
            radius="m"
            src="/royal.png"
            alt={"Thumbnail of " + post.metadata.title}
            aspectRatio="16 / 9"
          />
        )}
        <Column position="relative" fillWidth gap="8" vertical="center">
          <Heading as="h2" variant="heading-strong-l" wrap="balance">
            E-commerce website video Preview
          </Heading>
          <Text variant="label-default-s" onBackground="neutral-weak">
            click here view the Video 
          </Text>
          {/* {post.metadata.tag && (
            <Tag className="mt-8" label={post.metadata.tag} variant="neutral" />
          )} */}
        </Column>
      </Flex>
    </SmartLink>
     <hr style={{width:'70%'}}/>

    </>
  );
}
