import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";

const Component = () => {
    const { t } = useTranslation();

    return (
        <Layout title={t("comunitat:1")}>
            <h1>{t("comunitat:1")}</h1>
        </Layout>
    );
};

export default Component;
