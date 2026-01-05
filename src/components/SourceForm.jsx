import React from "react";
import Select from "react-select";
import styles from "/src/assets/styles/SourceForm.module.css";

const options = [
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "tiktok", label: "Tiktok" },
  { value: "x", label: "X" },
  { value: "google", label: "Google" },
  { value: "blog", label: "Blog" },
  { value: "pasangan", label: "Pasangan" },
  { value: "keluarga", label: "Keluarga" },
  { value: "teman", label: "Teman" },
];
//add props
export default function SourceForm({value, onChange}) {
  return (
    <>
      <form>
        <Select
          options={options}
          className={styles.select}
          classNamePrefix="custom-select"
          placeholder="Pilih"
          defaultValue={options[0]}
          onChange={onChange}
        />
      </form>

      {/*ganti dropdown dengan library react-select
    
      <form>
        <select name="source" className={styles.input}>
          <option value="instagram">Instagram</option>
          <option value="facebook">Facebook</option>
          <option value="tiktok">Tiktok</option>
          <option value="x">X</option>
          <option value="google">Google</option>
          <option value="blog">Blog</option>
          <option value="google">Blog</option>
          <option value="pasangan">Pasangan</option>
          <option value="keluarga">Keluarga</option>
          <option value="teman">Teman</option>
        </select>
      </form>
    </>
    */}
    </>
  );
}
