export default function CalculatorBox() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input type="number" value={initialInvestment} />
        </p>
        <p>
          <label>Annual investment</label>
          <input type="number" value={annualInvestment} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input type="number" value={expectedReturn} />
        </p>
        <p>
          <label>duration</label>
          <input type="number" value={duration} />
        </p>
      </div>
    </section>
  );
}
