import CompaniesList from "./CompaniesList";
import CompaniesFilters from "./Filters";

const CompaniesAdmin = () => {
  return (
    <div className="account-container--companies flex-col">
      <CompaniesFilters />
      <CompaniesList />
    </div>
  );
};

export default CompaniesAdmin;
