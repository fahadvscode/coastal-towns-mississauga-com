import { LAST_UPDATED, PRICING_DISCLAIMER, PRICING_ROWS } from "@/lib/content";

export function PricingTable() {
  return (
    <div>
      <p className="mb-4 text-sm text-text-muted">Last updated {LAST_UPDATED}</p>
      <table className="facts stack-cards">
        <thead className="sr-only">
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Reported figure</th>
            <th scope="col">Source</th>
          </tr>
        </thead>
        <tbody>
          {PRICING_ROWS.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td>
                <span className="block">{row.value}</span>
                <span className="mt-1 block text-sm text-text-muted">{row.source}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="prose-measure mt-6 text-sm text-text-muted">{PRICING_DISCLAIMER}</p>
    </div>
  );
}
